import { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const useImageDropzone = (onFileSelect, initialImage) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  useEffect(() => {
    if (!preview && initialImage) {
      setPreview(initialImage);
    }
  }, [initialImage, preview]);

  return {
    preview,
    getRootProps,
    getInputProps,
    isDragActive,
  };
};

export default useImageDropzone;
