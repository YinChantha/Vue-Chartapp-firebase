import {ref, watchEffect} from 'vue'
import { projectFirestore } from '../firebase/config' 

const getcollection = (collection) => {
    const document = ref(null)
    const error = ref(null)
    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
    const unsub = collectionRef.onSnapshot((snap) => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id:doc.id})
        })
        document.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        document.value = error.value =  'could not fetch data'
    })
    watchEffect((onInvalidate) => {
        //unsub from prev collection when watcher is stopped {componet unmounted}
        onInvalidate(() => unsub())
    })
    return {document, error}
}
export default getcollection