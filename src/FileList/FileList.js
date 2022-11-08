import axios from 'axios';
import React from 'react';
import FileItem from '../FileItem/FileItem';

const FileList = ({ file, removeFile }) => {
    const deleteFileHandler = (_name) => {
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        // <ul className="file-list">
        //     {
        //         file &&
        //         file.map(f => (<FileItem
        //             key={f.name}
        //             file={f}
        //             deleteFile={deleteFileHandler} />))
        //     }
        // </ul>
        <div className='file-list'>
             {
                 file &&
                 <FileItem
                     key={file.name}
                     file={file}
                     deleteFile={deleteFileHandler} />
             }
        </div>
    )
}

export default FileList