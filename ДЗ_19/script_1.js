const chang_num = e =>{
const value = e.value
e.value = value.replace(/\D/g, '')
}

const chang_abc = e =>{
    const value = e.value
    e.value = value.replace(/[0-9]/g, '')
    }