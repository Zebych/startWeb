import React from 'react';

const ChooseFileInput = ({setDataFile}) => {
    const onImageChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setDataFile({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    return (
        <div>
            <input
                type="file"
                onChange={onImageChange}
            />
        </div>
    );
};

export default ChooseFileInput;