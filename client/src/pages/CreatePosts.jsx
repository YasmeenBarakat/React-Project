import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
  ref,
} from "firebase/storage";
function CreatePosts() {
  const [file, setFile] = useState(null);
  const [imageUpload, setimageUpload] = useState(null);
  const [imageUploadError, setimageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const nandleUploadimage = async () => {
    try {
      if (!file) {
        setimageUploadError("please select an image");
        return;
      }
      setimageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setimageUpload(progress.toFixed(0));
        },
        (error) => {
          setimageUploadError("image upload faild");
          setimageUpload(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setimageUpload(null);
            setimageUploadError(null);
            setFormData({ ...formData, image: downloadUrl });
          });
        }
      );
    } catch (error) {
      setimageUploadError("Image Upload failed");
      setimageUpload(null);
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h4 className="text-center text-3xl my-7 font-semibold">Create a Post</h4>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="title"
            required
            id="title"
            className="flex-1"
          />

          <Select>
            <option value="unCategorized"> select a category</option>
            <option value="JavaScript"> JavaScript</option>
            <option value="Reactjs"> Reactjs</option>
            <option value="Next"> Next</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-pink-300 border-dashed p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToPink"
            size="sm"
            outline
            onClick={nandleUploadimage}
            disabled={imageUpload}
          >
            {imageUpload ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUpload}
                  text={`${imageUpload || 0} %`}
                />
              </div>
            ) : (
              "Upload image"
            )}
          </Button>
        </div>

        <ReactQuill
          theme="snow"
          placeholder="write something....."
          className="h-72 mb-12"
          required
        />

        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}

export default CreatePosts;
