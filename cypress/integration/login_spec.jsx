describe("Login Page", () => {
  it("Displays error message for invalid input", () => {
    cy.visit("http://localhost:3000"); // アプリのベースURLに置き換える

    // 不正な入力を模擬
    cy.get("[data-testid=email-input]").type("invalidemail");
    cy.get("[data-testid=password-input]").type("short");

    // ログインボタンをクリック
    cy.get("[data-testid=login-button]").click();

    // エラーメッセージが表示されていることを確認
    cy.get("[data-testid=error-message]").should("be.visible");
  });

  it("Does not display error message for valid input", () => {
    cy.visit("http://localhost:3000"); // アプリのベースURLに置き換える

    // 正しい入力を模擬
    cy.get("[data-testid=email-input]").type("valid@email.com");
    cy.get("[data-testid=password-input]").type("securepassword");

    // ログインボタンをクリック
    cy.get("[data-testid=login-button]").click();

    // エラーメッセージが表示されていないことを確認
    cy.get("[data-testid=error-message]").should("not.exist");
  });
});
