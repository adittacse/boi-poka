import Swal from 'sweetalert2';

const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        Swal.fire({
            title: "Book already read",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
                `
            }
        });
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
        Swal.fire({
            title: "Added to read list",
            icon: "success",
            draggable: true
        });
    }
}

export { getStoredBook, addToStoredDB };