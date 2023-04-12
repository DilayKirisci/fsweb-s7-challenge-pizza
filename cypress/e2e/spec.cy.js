describe("template spec", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
	});
});

// describe("template spec2", () => {
// 	it("passes", () => {
// 		cy.get("#order-pizza").click();
// 	});
// });

// cy.get('[data-cy=submit]').click()

describe("Visits order page", () => {
	it("Checks if header text exists", () => {
		cy.visit("localhost:3000");
		cy.visit("localhost:3000/menu");
		cy.visit("localhost:3000/order");
	});
});

describe("Pizza order form", () => {
	it("allows users to select pizza size and dough", () => {
		cy.visit("localhost:3000/order");

		cy.get('input[name="size"]').should("have.attr", "required");

		cy.get('select[name="dough"]').should("have.attr", "required");
	});
});

describe("Navigation", () => {
	it("should navigate to the success route on button click", () => {
		cy.visit("/"); // assuming the button is on the home page
		cy.get("button").click(); // replace "button" with the selector for your button
		cy.url().should("include", "/success"); // replace "/success" with the expected success route
	});
});

describe("success", () => {
	it("should redirect to success page on button click", () => {
		cy.visit("http://localhost:3000/success"); // assuming the button is on

		cy.contains("Teknolojik Yemekler");
	});
});
