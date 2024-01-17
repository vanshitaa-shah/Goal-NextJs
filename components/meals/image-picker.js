"use client";
import { useRef, useState } from "react";
import Styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handleClick = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={Styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={Styles.controls}>
        <div className={Styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          type="file"
          className={Styles.input}
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          required
        />
        <button className={Styles.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
