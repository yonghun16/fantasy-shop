import { useDropzone } from "react-dropzone";
import { useState, useEffect, useCallback } from "react";

const ImageDropzone = ({ onFileSelect, initialImage }) => {
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

  // 기존 이미지가 있는 경우 초기 미리보기 설정
  useEffect(() => {
    if (!preview && initialImage) {
      setPreview(initialImage);
    }
  }, [initialImage, preview]);

  console.log("ImageDropzone - initialImage:", initialImage);
  console.log("preview:", preview);

  return (
    <div
      {...getRootProps()}
      className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md text-center cursor-pointer bg-gray-50"
    >
      <input {...getInputProps()} />
      {preview ? (
        <img
          src={preview}
          alt="미리보기"
          className="mx-auto max-h-48 object-contain"
        />
      ) : isDragActive ? (
        <p className="text-indigo-600">이미지를 여기에 드롭하세요...</p>
      ) : (
        <p className="text-gray-500">이미지를 클릭하거나 드래그하여 업로드</p>
      )}
    </div>
  );
};

export default ImageDropzone;
