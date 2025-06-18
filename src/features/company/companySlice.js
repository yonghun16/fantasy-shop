import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyData: {
    owner: '고길동',
    address: '소환사의 협곡 11시 방향 고대엘프의 숨겨진 동굴',
    businessNumber: '123-12-12345',
    businessType: '제 2025-소환사협곡-12343호',
    privacyOfficer: '제우스',
    tel: '1588-1234',
    fax: '000-123-1234',
    email: 'jeous123@fantasyshop',
  },
};


const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
});

export default companySlice.reducer;
