type ErrorPeturnType = {
    status: 'fail';
    errorMessage: string;
}

type SuccessPeturnType = {
    status: 'success';
}

type ValidateNameSurnameReturnType = ErrorPeturnType | SuccessPeturnType;

export default function validateNameSurname(name: string, type: "Name" | "Surname"): ValidateNameSurnameReturnType{
    
  const textFormat = /^[A-ZА-ЯІЇЄҐ][a-zA-ZА-ЯІЇЄҐа-яіїєґ]*(-[A-ZА-ЯІЇЄҐ][a-zA-ZА-ЯІЇЄҐа-яіїєґ]+)*$/g;
  if (!name.match(textFormat)){
        return {
            status: 'fail',
            errorMessage: `${type} must contain only latin letters and '-'.`, 
        };
    }

    return {
        status: "success"
    };
}