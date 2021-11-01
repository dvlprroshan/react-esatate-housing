// section 7 of home page

import HeadingGrp from "@/com_g/HeadingGrp";
import InputBox from "@/com_g/InputBox";
import useForm from "@/hooks/useForm";
// import { useState } from 'react';
// import { GiConsoleController } from "react-icons/gi";



type formDataType = {
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
}
const Section7 = () => {

    const [formData, setFormData] = useForm<formDataType>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });
    // console.log(formData);

    // const saveInputValue = (e: any) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // }
    // console.log(formData);
    return (
        <div className="section-7">
            <HeadingGrp
                title="TECH SUPPORT"
                subTitle="Get a Callback from our Tech Support"
            />
            <div className="main">
                <div className="img-con">
                    <img src="/assets/images/vector/support-img.png" alt="img1" />
                    <div className="text">Tech Support</div>
                </div>
                <div className="form">
                    <div className="name">
                        <InputBox value={formData.firstName} setWhenChange={setFormData} label="First Name: " name="firstName" />
                        <InputBox value={formData.lastName} setWhenChange={setFormData} label="Last Name: " name="lastName" />
                    </div>
                    <InputBox value={formData.email} setWhenChange={setFormData} label="Email Id: " name="email" />
                    <InputBox value={formData.phone} setWhenChange={setFormData} label="Phone No: " name="phone" />
                    <div className="check-box-license">
                        <input type="checkbox" className="checkbox" name="license" />
                        <span>

                            Lorem Ipsum is simply dummy text of the printing and typesetting <a href="#">Privacy & Policy.</a>
                        </span>
                    </div>
                    <input type="submit" value="GET CALLBACK" className="submit" />
                </div>
            </div>
        </div>
    );
};

export default Section7;
