const fs=require('fs')
const path=require('path')


// Read the contents of the file
function READ_FILE(){
    const file=path.join(__dirname,'lipsum.txt')

    fs.readFile(file,'utf8',(err,data)=>{
        if(err){
            console.log(err)
        }
    
        console.log(data)
    })
}

// Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
function lipsum_upperCase(){
    const file=path.join(__dirname,'lipsum.txt')
    let folder_path=path.join(__dirname,"filenames.txt") 
    let file_name=path.join(folder_path,'lipsum_upper.txt')

    fs.readFile(file,'utf8',(err,data)=>{
        if(err){
            console.log(err)
        }

        if(!fs.existsSync(folder_path)){
            fs.mkdir(folder_path,(err)=>{
                console.log(err)
            })
        }

        fs.writeFile(file_name,data.toUpperCase(),(err)=>{
            console.log(err)
        })
    })
}

// lipsum_upperCase()

// Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
function lipsum_lower_nextLine(){
    const file=path.join(path.join(__dirname,'filenames.txt'),'lipsum_upper.txt')
    const newFile=path.join(path.join(__dirname,'filenames.txt'),'lipsum_lower.txt')
    let arr=[]
    // console.log(file)
    fs.readFile(file,'utf8',(err,data)=>{
        if(err){
            console.log(err)
        }
        
        let sentence=data.toLowerCase().split('.')
        let text=""

        for(let i=0;i<sentence.length;i++){
            text+=sentence[i]
            text+='\r\n'
        }

        fs.writeFile(newFile,text,(err)=>{
            if(err){
                console.log(err)
            }
        })
    })
    
}

// Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
function lipsum_sort(){
    const file=path.join(__dirname,'lipsum.txt')
    const newFile=path.join(path.join(__dirname,'filenames.txt'),'lipsum_sort.txt')

    
    fs.readFile(file,'utf-8',(err,data)=>{
        let sentence=data.split(' ').sort().join(' ').split('.')
        let text=""

        for(let i=0;i<sentence.length;i++){
            text+=sentence[i]
            text+='\r\n'
        }
        
        fs.writeFile(newFile,text,(err)=>{
            if(err){
                console.log(err)
            }
        })
    })
}

// lipsum_sort()



// Read and delete the contents of the file
function delete_files(){
    const file=path.join(path.join(__dirname,'filenames.txt'))

    fs.readdir(file, (err, files) => {
        if (err)
          console.log(err);
        else {
          files.forEach(temp => {
            fs.unlink(path.join('filenames.txt',temp),(err)=>{
                console.log(err)
            })
          })
        }
      })
}

// delete_files()

module.exports={
    READ_FILE,
    lipsum_upperCase,
    lipsum_lower_nextLine,
    lipsum_sort,
    delete_files
}


