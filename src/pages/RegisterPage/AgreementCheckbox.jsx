const AgreementCheckbox = ({ ...props }) => {
  return (
    <div className="pt-1">
      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          {...props}
        />
        <span>본인확인 서비스 약관에 동의합니다.</span>
      </label>
    </div>
  );
};

export default AgreementCheckbox;
