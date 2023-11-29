// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
// describe("Login Page", () => {
//   beforeEach(() => {
//     // テストの前にアプリを訪れる
//     cy.visit('https://railway.bookreview.techtrain.dev/signin'); // アプリのベースURLに置き換える
//   });

//   it("Displays error message for invalid input", () => {
//     // 不正な入力を模擬
//     cy.get("[data-testid=email-input]").type("invalidemail");
//     cy.get("[data-testid=password-input]").type("short");

//     // ログインボタンをクリック
//     cy.get("[data-testid=login-button]").click();

//     // エラーメッセージが表示されていることを確認
//     cy.get("[data-testid=error-message]").should("be.visible");
//   });

//   it("Does not display error message for valid input", () => {
//     // 正しい入力を模擬
//     cy.get("[data-testid=email-input]").type("valid@email.com");
//     cy.get("[data-testid=password-input]").type("securepassword");

//     // ログインボタンをクリック
//     cy.get("[data-testid=login-button]").click();

//     // エラーメッセージが表示されていないことを確認
//     cy.get("[data-testid=error-message]").should("not.exist");
//   });
// });
