
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDw4kG6p8t4m9mobeTr1Gsa-HFGF-uhixA",
    authDomain: "personaldetails-demo.firebaseapp.com",
    projectId: "personaldetails-demo",
    storageBucket: "personaldetails-demo.appspot.com",
    messagingSenderId: "4794382045",
    appId: "1:4794382045:web:bfef17930c693e65d20d34",
    measurementId: "G-CF6S54XBHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
// console.log(db)
const callref = collection(db, 'Details')
// console.log(callref)
const docArray = []
const list = document.querySelector('.list')


const getData = (docArray) => {
    docArray.forEach((doc) => {
        const query = `
            <ol>
                <li>${doc[0].name.Name}</li>
                <li>${doc[0].name.Age}</li>
                <li>${doc[0].name.Email}</li>
            </ol>
    `
        list.innerHTML += query
    })
}

getDocs(callref).then((snapshot) => {
    // console.log(snapshot)
    // console.log(snapshot.docs)
    snapshot.docs.forEach((element) => {
        // docArray.push([{ ...element.data(), id: element.id }])
        docArray.push([{ name: element.data() }])
    });
    console.log(docArray)
    return docArray
}).then((docArray) => {
    getData(docArray)

})
