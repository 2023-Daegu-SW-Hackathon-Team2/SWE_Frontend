import React from "react";
import "./styles/adminproductinfo.styles.css";
import ProductInfoContainer from "@components/ProductInfo/containers/ProductInfoContainer";
type Props = {
    handleFileChange: any;
    fileNames: any;
    onUploadClick: any;
    data: any;
    onChangeTitle: any;
    onChangePrice: any;
    onChangeCategory: any;
    onChangeChoose: any;
    onConfirmUpdateProduct: any;
    shotptClick: any;
    shopt: any;
};

const AdminProductInfo = ({
    handleFileChange,
    fileNames,
    onUploadClick,
    data,
    onChangeTitle,
    onChangePrice,
    onChangeCategory,
    onChangeChoose,
    onConfirmUpdateProduct,
    shotptClick,
    shopt,
}: Props) => {
    return (
        <div className="adproductinfo">
            <div className="adhome">
                <div className="adhome-tab">
                    <div
                        className="adhome-tab-banner"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                        />
                        <div>선택된 파일: {fileNames.join(", ")}</div>
                        <button
                            className="upload"
                            onClick={() => {
                                onUploadClick();
                            }}
                        >
                            업로드
                        </button>
                    </div>
                    <div className="input_container">
                        <div className="gpt_container">
                            <input
                                className="input-type"
                                type="text"
                                placeholder="제목"
                                onChange={(e) => {
                                    onChangeTitle(e);
                                }}
                            />
                            <input
                                className="input-type"
                                type="text"
                                placeholder="가격"
                                onChange={(e) => {
                                    onChangePrice(e);
                                }}
                            />
                            <input
                                className="input-type"
                                type="text"
                                placeholder="종류"
                                onChange={(e) => {
                                    onChangeCategory(e);
                                }}
                            />
                            <input
                                className="input-type"
                                type="text"
                                placeholder="장점"
                                onChange={(e) => {
                                    onChangeChoose(e);
                                }}
                            />
                        </div>
                        {shopt.map((item: any) => {
                            return <div className="recommend_text">{item}</div>;
                        })}
                        <button className="recommend" onClick={shotptClick}>
                            추천 받기!
                        </button>
                        <button
                            className="upload"
                            onClick={() => {
                                onConfirmUpdateProduct();
                            }}
                        >
                            업로드
                        </button>
                    </div>
                </div>
            </div>
            <div className="adproductinfo-divider"></div>
            <ProductInfoContainer view={"-admin"} />
        </div>
    );
};

export default AdminProductInfo;
