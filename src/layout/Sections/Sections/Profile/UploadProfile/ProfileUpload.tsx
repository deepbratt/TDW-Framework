import {useRef} from 'react'
import {Upload} from "../types"

const ProfileUpload = ({setImg,profile} : Upload) => {

    const uploadedImage = useRef<any | FileReader>(null);
    const imageUploader = useRef<any | FileReader>(null);
    const handleImageUpload = (e : any) => {
      const [file] = e.target.files;
      if (!file){
          return console.log("error")
      }else {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target?.result;
        };
        reader.readAsDataURL(file);
        setImg(file)
      }
    };

    console.log("Img",profile)
  
    return (
      <>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none"
          }}
        />
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50px",
          }}
          onClick={() => {
            imageUploader.current.click()}}>
        
              <img
            src={profile}
            width="100%"
            ref={uploadedImage}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              position: "absolute",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          />
        </div>
      </>
    );
}

export default ProfileUpload
