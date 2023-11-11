import React from 'react';
import './styles/footer.styles.css';
import { CompanyData } from '@typedef/types';


const Footer = (props:CompanyData) => {

    return(
        <div className='footer'>
            <div className='footer-box'>
                <span>상호(법인명): {props.companyName} | 주소: {props.address}</span><br></br>
                <span>대표자 : {props.ceoName} | 사업자등록번호 : {props.companyId} <a href=''>사업자정보확인</a></span><br></br>
                <span>전화번호 : {props.phone} | 이메일 : {props.email}</span><br></br>
                <span>통신판매업: {props.sellerId} | 개인정보보호책임자: {props.protectName} <a href=''>통신판매업정보확인</a></span><br></br>
                <br></br>
                <span>Copyright 2023. SWE all rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
