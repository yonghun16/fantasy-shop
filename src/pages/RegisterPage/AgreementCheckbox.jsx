const AgreementCheckbox = ({ checked, onChange }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      name="agree"
      id="agree"
      checked={checked}
      onChange={onChange}
      className="accent-indogo-500"
    />
    <label htmlFor="agree" className="text-sm select-none">본인확인 서비스 약관에 동의합니다.</label>
  </div>
);

export default AgreementCheckbox;
