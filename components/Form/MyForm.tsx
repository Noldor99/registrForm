'use client'
import React, { FormEvent, useState } from 'react'
import CustomButton from '../UI/CustomButton/CustomButton'
import CustomInput from '../UI/CustomInput/CustomInput'
import CustomRadioInput from '../UI/CustomRadioInput/CustomRadioInput'
import css from './MyForm.module.sass'
import Image from 'next/image';

const MyForm = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleSubjectSelect = (label: string) => {
    setSelectedSubject(label);
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phoneNumber: phoneNumberValue,
      selectedSubject: selectedSubject,
      message: messageValue,
    };
    console.log(formData);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <div className={css.wrapInput}>
          <CustomInput
            label='First Name'
            value={firstNameValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstNameValue(e.target.value)}
          />
          <CustomInput
            label='Last Name'
            value={lastNameValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastNameValue(e.target.value)}
          />
          <CustomInput
            label='Email'
            value={emailValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
          />
          <CustomInput
            label='Phone Number'
            value={phoneNumberValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumberValue(e.target.value)}
          />
        </div>
        <p className={css.parag}>Select Subject?</p>
        <div className={css.wrapRadio}>
          <CustomRadioInput
            label="General Inquiry"
            name='simple'
            selected={selectedSubject === "General Inquiry"}
            onSelect={handleSubjectSelect}
          />
          <CustomRadioInput
            label="Sales Inquiry"
            name='simple'
            selected={selectedSubject === "Sales Inquiry"}
            onSelect={handleSubjectSelect}
          />
          <CustomRadioInput
            label="Support Inquiry"
            name='simple'
            selected={selectedSubject === "Support Inquiry"}
            onSelect={handleSubjectSelect} />
          <CustomRadioInput
            label="Other Inquiry"
            name='simple'
            selected={selectedSubject === "Other Inquiry"}
            onSelect={handleSubjectSelect} />
        </div>
        <div className={css.inputMassage}>
          <CustomInput
            label='Message'
            placeholder='Write your message..'
            value={messageValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessageValue(e.target.value)}
          />
        </div>
        <div className={css.wrapButton}>
          <CustomButton type='submit'>
            Send Message
          </CustomButton>
        </div>
        <div className={css.svgImage}>
          <Image
            src="/Arrow.png"
            alt="Your Image Alt Text"
            width={240}
            height={200}
          />
        </div>
      </form>
    </div>
  )
}

export default MyForm
