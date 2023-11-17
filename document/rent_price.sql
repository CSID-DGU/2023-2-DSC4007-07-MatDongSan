CREATE TABLE `rent_price` (
  `address` char(19) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '토지의 고유한 위치를 지정하는 토지고유번호 \n시 + 시군구(일반구) + 읍면동 + 리 + 산 여부 + 본번 + 부번 (19자리)',
  `sido` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '시',
  `sigungu` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '시군구',
  `ilbangu` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '일반구',
  `eupmyeondong` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '읍면동',
  `ri` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '리',
  `main_num` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '본번',
  `sub_num` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '부번',
  `is_mountain` int DEFAULT NULL COMMENT '산 여부',
  `rent_type` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '전월세구분',
  `exclusive_area` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '전용면적(㎡)',
  `contract_date` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '계약일자',
  `deposit` int DEFAULT NULL COMMENT '보증금\n',
  `rent` int DEFAULT NULL COMMENT '월세',
  `previous_deposit` int DEFAULT NULL COMMENT '종전계약 보증금',
  `previous_rent` int DEFAULT NULL COMMENT '종전계약 월세',
  `property_type` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '아파트, 오피스텔, 연립다세대 등의 주택 유형',
  `building_name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '건물 명',
  `road_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '도로명',
  `floor` int DEFAULT NULL COMMENT '층',
  `construction_year` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '건축년도',
  `contract_start` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '계약 시작일\n',
  `contract_end` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '계약 종료일',
  `contract_type` int DEFAULT NULL COMMENT '계약 구분( 0 : 기존, 1 : 신규, 2 : 갱신)',
  `renewal_right` int DEFAULT NULL COMMENT '갱신요구권 ( 0 : 미 사용, 1 : 사용)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci