export const cmmnUtils = () => {
    const isEmpty = (value: string | number | undefined | null ) : boolean => {
        if(typeof(value) === "string") {
            return (!value || value.trim() === "" || value === null);
        } else if(typeof(value) === "number") {
            return (!value || value === null);
        } else {
            return true;
        }
    }

    const checkEmail = (email : string) : boolean => {
        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        return regExp.test(email);
    }


    return {
        isEmpty,
        checkEmail
    }
}