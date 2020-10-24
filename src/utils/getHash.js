const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/' // ['', '1', '']
    //location.hash => #/1/
    //location.hash.slice(1) => /1/
    //location.hash.toLocaleLowerCase().split('/') => 1

    export default getHash