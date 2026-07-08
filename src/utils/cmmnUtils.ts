export const isEmpty = (value: string | number | undefined | null ) : boolean => {
    if(typeof(value) === "string") {
        return (!value || value.trim() === "" || value === null);
    } else if(typeof(value) === "number") {
        return (!value || value === null);
    } else {
        return true;
    }
}

export const isEmptyFile = (file: FormData | undefined) : boolean => {
    const isFormEmpty = file instanceof FormData;
    return isFormEmpty ? file.keys().next().done === true : false;
}

export const checkEmailFormat = (email : string) : boolean => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
}
