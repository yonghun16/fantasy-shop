import useImageDropzone from "../../../features/DetailProduct/useImageDropzone";

const ImageDropzone = ({ onFileSelect, initialImage }) => {
  const { preview, getRootProps, getInputProps, isDragActive } =
    useImageDropzone(onFileSelect, initialImage);

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
