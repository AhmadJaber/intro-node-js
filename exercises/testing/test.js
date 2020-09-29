// write some tests
const { fixId, findUser } = require("./users.js");

describe("users", () => {
	describe("fixId", () => {
		test("convert param id to db id", () => {
			expect(fixId("200")).toBe(200);
		});
	});

	describe("findUser", () => {
		test("get user id from id if user is there", async () => {
			const user = await findUser(1);

			expect(user.id).toBe(1);
		});
	});
});
