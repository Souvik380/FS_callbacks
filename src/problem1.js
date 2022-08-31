const path=require('path')
const fs=require('fs')

function make_folder(){
    let folder_path=path.join(__dirname,"RANDOM_JSON")
    fs.mkdir(folder_path,(err)=>{
        console.log(err)
    })

    
    for(let i=0;i<5;i++){
        let str="file-"+i+".json"
        let file=path.join(folder_path,str)
        fs.writeFile(file,' ',(err)=>{
            console.log(err)
        })
    }

    console.log("A folder by the name RANDOM_JSON and some random json files inside the folder is created")
}

function delete_folder(){
    let folder_path=path.join(__dirname,"RANDOM_JSON")
   
    fs.rmdir(folder_path, { recursive: true }, err => {
        if (err) {
          throw err
        }
      })

      console.log("Folder is deleted!")
}


module.exports={
    make_folder,
    delete_folder
}