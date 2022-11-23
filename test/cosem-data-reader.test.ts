import { CosemDataReader } from "../src/lib/cosem-data-reader";
import { cosemTypeDefinitionMap } from "../src/lib/cosem/generated/asn1-structure";


let cosemDataReader: CosemDataReader;

describe('CosemDataReader', () => {

	beforeEach(() => {
		cosemDataReader = new CosemDataReader(cosemTypeDefinitionMap, 'XDLMS-APDU');
	});


	test('test APDU', () => {
		const result = cosemDataReader.read(
			Buffer.from('0f0017fa980c07e60b0c0610360000ffc400021009060000010000ff090c07e60b0c0610360000ffc400020209060000600100ff090e314b464d303230303233343830340202090600002a0000ff09104b464d31323030323030323334383034020309060100200700ff1208f402020fff1623020309060100340700ff12090c02020fff1623020309060100480700ff12090a02020fff16230203090601001f0700ff1200a502020ffe1621020309060100330700ff1200ad02020ffe1621020309060100470700ff12002502020ffe1621020309060100010700ff06000002ca02020f00161b020309060100020700ff060000000002020f00161b020309060100010800ff060014416002020f00161e020309060100020800ff060000000002020f00161e020309060100030800ff06000012d202020f001620020309060100040800ff060005be6002020f001620', 'hex')
		);
		expect(result).toBeDefined();
		expect(result?.typeName).toBe( 'XDLMS-APDU');
		expect(result?.results?.[0].propertyName).toBe( 'data-notification');
		expect(result?.results?.[0].results?.[0]?.propertyName).toBe( 'long-invoke-id-and-priority');
		expect(result?.results?.[0].results?.[0]?.results?.[0]?.results?.[0].numberValue).toBe( 1571480);
		expect(result?.results?.[0].results?.[1]?.propertyName).toBe( 'date-time');
		expect(result?.results?.[0].results?.[1]?.dateTimeValue?.epoch).toBe( 1668268440000);
		expect(result?.results?.[0].results?.[1]?.dateTimeValue?.asString).toBe( '2022-11-12 16:54:00');
		expect(result?.results?.[0].results?.[2]?.propertyName).toBe( 'notification-body');
	});


});
