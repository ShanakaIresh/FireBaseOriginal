
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
const callRef = collection(db, 'Details')

const docArray = []
const list = document.querySelector('.list')


const getData = (docArray) => {
    docArray.forEach((element) => {
        let i = 0
        const query = `
            <ol>
                <li>${element[i].details.Name}</li>
                <li>${element[i].details.Age}</li>
                <li>${element[i].details.Email}</li>
            </ol>
    `
        list.innerHTML += query
        i++

    })


}

getDocs(callRef).then((snapshot) => {
    // console.log(snapshot.docs[0].data())
    // console.log(snapshot.docs)
    snapshot.docs.forEach((element) => {
        docArray.push([{ details: element.data() }])
    });
    console.log(docArray)
    return docArray
}).then((docArray) => {
    getData(docArray)

})



