import SpriteIcon from "components/UIKit/SpriteIcon";

import { useState } from "react";
import { allowedImageMIMETypes } from "utils/allowedImageMimeTypes";
import { ClearPreviewButton, DropZone, Image, MainWrapper, Preview } from "./ImageDropZone.styled";

const ImageDropZone = () => {
  const [dragIsOver, setDragIsOver] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFile = file => {
    setPreview(URL.createObjectURL(file));
    //here we should write 'file' to react-hook-form context
  };

  const clearPreview = () => {
    setPreview(null);
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
    <MainWrapper>
      {!preview ? (
        <DropZone
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          $isdrag={dragIsOver}
          $disabled={preview}
        >
          <SpriteIcon
            id="icon-upload-photo"
            size={[50, 64, 64]}
          />

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
    </MainWrapper>
  );
};

export default ImageDropZone;
