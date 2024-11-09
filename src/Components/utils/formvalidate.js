export const checkValidateData = (name,email,phonenumber,adultcount , childrencount) => {
      const isNameValid = /^[a-zA-Z\-]+$/.test(name)
      const isEmailValid =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
      const isPhoneNumberValid=/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/.test(phonenumber)
      const isValidAdultCount = /^[1-5]$/.test(adultcount)
      const isValidChildrenCount =  /^[1-5]$/.test(childrencount)

      if (!isNameValid) return "please Enter Valid Name"
      if (!isEmailValid) return "please Enter Valid email"
      if (!isPhoneNumberValid) return "please Enter Valid phone number"
      if (!isValidAdultCount) return "please Enter Valid adults count"
      if (!isValidChildrenCount) return "please Enter Valid childrens count" 

      return null
}