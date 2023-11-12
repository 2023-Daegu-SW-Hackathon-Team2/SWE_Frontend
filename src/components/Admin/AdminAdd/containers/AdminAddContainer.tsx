import React, { useCallback, useEffect, useState } from "react";
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
import AdminAdd from "../AdminAdd";
type Props = {};

const AdminAddContainer = (props: Props) => {
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
    const [option, setOption] = useState<string>("");
    const params: any = useParams().id;
    const categoryList = ["bottom", "top", "outer", "shoes", "acc"];
    const [shopt, setShopt] = useState<string[]>([]);


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

    const onChangeOptions = useCallback(
        (e: EInput) => {
            setOption(e.target.value);
            console.log(option)
        },
        [option]
    );

    const onChooseChange = useCallback(
        (e: EInput, index: number) => {
            const newChoose = [...choose]
            newChoose[index]= e.target.value;
            setChoose(newChoose);
            console.log(newChoose[index]);
            console.log(e)
        },
        [choose]
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
            choose: choose,
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

    const onDeleteClick = useCallback((deloption: string) => {
        const newChoose = [];
        for(let i=0; i<choose.length; i++){
            if(choose[i] !== deloption){
                newChoose.push(choose[i])
            }
        }
        setChoose(newChoose)
        console.log(choose)
    }, [option, choose]);

    const onAddClick = useCallback(() => {
        const newChoose = [...choose]
        newChoose.push(option)
        setChoose(newChoose)
        console.log(choose)
    }, [option, choose]);

    

    return (
            <AdminAdd
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
            onDeleteClick={onDeleteClick}
            onAddClick={onAddClick}
            onChangeOptions={onChangeOptions}
            newOption={option}
            onChooseChange={onChooseChange}
            />
    );
};

export default AdminAddContainer;
