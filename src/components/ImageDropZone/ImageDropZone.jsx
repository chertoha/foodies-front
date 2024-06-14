import SpriteIcon from "components/UIKit/SpriteIcon";

import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { allowedImageMIMETypes } from "utils/allowedImageMimeTypes";
import {
  ClearPreviewButton,
  DropZone,
  ErrorMessage,
  Image,
  ImageUploadBox,
  ImageUploadBoxText,
  MainWrapper,
  Preview,
} from "./ImageDropZone.styled";

const ImageDropZone = ({ name, validation }) => {
  const [dragIsOver, setDragIsOver] = useState(false);
  const [preview, setPreview] = useState(null);

  const {
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const handleFile = file => {
    if (!allowedImageMIMETypes.includes(file.type)) {
      setError(name, {
        type: "custom",
        message: `Wrong file type!. Allowed types: ${allowedImageMIMETypes.join(", ")}`,
      });
      return;
    }

    clearErrors(name);

    setPreview(URL.createObjectURL(file));
    setValue(name, file);
  };

  const clearPreview = () => {
    setPreview(null);
    setValue(name, null);
  };

  const handleDragOver = e => {
    e.preventDefault();
    setDragIsOver(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setDragIsOver(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setDragIsOver(false);

    if (preview) return;

    const file = Array.from(e.dataTransfer.files)[0];
    file && handleFile(file);
  };

  const onIputFile = e => {
    const file = e.target.files[0];
    file && handleFile(file);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <MainWrapper>
          {!preview ? (
            <DropZone
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              $isdrag={dragIsOver}
              $disabled={preview}
              {...validation}
            >
              <ImageUploadBox>
                <SpriteIcon
                  id="icon-upload-photo"
                  size={[50, 64, 64]}
                />
                <ImageUploadBoxText>Upload a photo</ImageUploadBoxText>
              </ImageUploadBox>
              <input
                type="file"
                accept={allowedImageMIMETypes.join(",")}
                onChange={onIputFile}
                hidden
                disabled={preview}
              />
            </DropZone>
          ) : (
            <Preview>
              <Image
                src={preview}
                alt="Preview recipe"
              />
              <ClearPreviewButton
                type="button"
                aria-label="Clear preview"
                onClick={clearPreview}
              >
                <SpriteIcon
                  size={[20, 20, 20]}
                  id="icon-trash"
                />
              </ClearPreviewButton>
            </Preview>
          )}

          {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </MainWrapper>
      )}
    />
  );
};

export default ImageDropZone;
