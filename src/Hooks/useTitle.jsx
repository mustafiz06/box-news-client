const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - Dragon News`;

    },[title])
}

export default useTitle;