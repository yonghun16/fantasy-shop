const AgreementCheckbox = ({...props }) => {
  return (
    <label className="flex items-center space-x-2 text-sm">
      <input 
        type="checkbox" 
        {...props} 
      />
      <span>본인확인 서비스 약관에 동의합니다.</span>
    </label>
  );
};

export default AgreementCheckbox;
