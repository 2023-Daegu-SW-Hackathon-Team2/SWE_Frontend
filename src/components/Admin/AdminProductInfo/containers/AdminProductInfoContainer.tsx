import React, { useCallback, useEffect, useState } from "react";
import AdminProductInfo from "../AdminProductInfo";
import { EFile, EInput, ItemInfo, ShoPT } from "@typedef/types";
import { getBannerImg, postBanner, postNewBest } from "src/api/HomeAPI";
import {
    getProductInfo,
    updateProduct,
    uploadImage,
} from "src/api/ProductAPI";
import { useParams } from "react-router-dom";
import { postGpt } from "src/api/ShoPTAPI";
import { deleteGnbCategory, putGnbCategory } from "src/api/GnbAPI";
type Props = {};

const AdminProductInfoContainer = (props: Props) => {
    const [files, setFiles] = useState<File[]>([]);
    const [fileNames, setFileNames] = useState<string[]>([]);
    const [datas, setDatas] = useState<ItemInfo>();
    const [title, setTitle] = useState<string>("");
    const [img, setImg] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<number>(0);
    const [choose, setChoose] = useState<string[]>([]);
    const [desc, setDesc] = useState<string>("");
    const [good, setGood] = useState<string>("");
    const params: any = useParams().id;
    const categoryList = ["bottom", "top", "outer", "shoes", "acc"];
    const [shopt, setShopt] = useState<string[]>([]);

    useEffect(() => {
        setTimeout(()=>{
            
        })
        getProductInfo(parseInt(params)).then((data) => {
          console.log(data);
          setDatas(data);
          setTitle(data[0].title);
          setImg(data[0].img);
          setPrice(data[0].price);
          setCategory(data[0].category);
          setChoose(data[0].choose);
          setDesc(data[0].description);
        });
      }, []);

    const onChangeTitle = useCallback(
        (e: EInput) => {
            setTitle(e.target.value);
            console.log(e.target.value);
        },
        [title]
    );

    const onChangePrice = useCallback(
        (e: EInput) => {
            setPrice(parseInt(e.target.value));
        },
        [price]
    );

    const onChangeCategory = useCallback(
        (e: EInput) => {
            setCategory(parseInt(e.target.value));
        },
        [category]
    );

    const onChangeDesc = useCallback(
        (e: EInput) => {
            setDesc(e.target.value);
        },
        [desc]
    );

    const onChangeGood = useCallback(
        (e: EInput) => {
            setGood(e.target.value);
        },
        [good]
    );

    const shotptClick = useCallback(() => {
        console.log(title, price, categoryList[category], good);
        const shopt: ShoPT = {
            Product_Name: title,
            Product_Price: price,
            Product_Description: categoryList[category],
            Product_Benefits: good,
        };

        postGpt(shopt).then((res) => {
            console.log(res);
            setShopt(res);
        });
    }, [title, price, category, good]);

    const onConfirmUpdateProduct = useCallback(() => {
        const Lists: any = [];
        Lists.push({
            title: title,
            img: img,
            price: price,
            description: desc,
            category: category,
            choose: null,
        });
        updateProduct(params, Lists).then(() => {
            window.location.reload();
        });
    }, [title, img, price, desc, category, choose]);

    const handleFileChange = (event: EFile) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            setFiles(selectedFiles);
            setFileNames(selectedFiles.map((file) => file.name));
        }
    };
    const onUploadClick = useCallback(() => {
        uploadImage(files).then((res) => {
            setImg(res);
        });
    }, [files]);

    const onUpdateClick = useCallback(
        (index: number) => {
        //   putGnbCategory(categories[index]);
          alert('수정되었습니다.');
        },
        [],
    );

    const onDeleteClick = useCallback((id: number) => {
        deleteGnbCategory(id);
        window.location.reload();
    }, []);

    return (
        <div>
            {datas ? <AdminProductInfo
            handleFileChange={handleFileChange}
            fileNames={fileNames}
            onUploadClick={onUploadClick}
            onChangeTitle={onChangeTitle}
            onChangePrice={onChangePrice}
            onChangeCategory={onChangeCategory}
            onChangeDesc={onChangeDesc}
            onConfirmUpdateProduct={onConfirmUpdateProduct}
            onChangeGood={onChangeGood}
            shoptClick = {shotptClick}
            data={datas}
            /> : <div>Loading</div> }
        </div>
    );
};

export default AdminProductInfoContainer;
