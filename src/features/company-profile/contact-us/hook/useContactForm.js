import { useState } from "react";

export default function useContactForm() {
    const [input, setInput] = useState({
        fullName: "",
        company: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
    })

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const formSubmit = () => {
        console.log(input)
    }

    return {
        handleInputChange,
        formSubmit,
    }
}