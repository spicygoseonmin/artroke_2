// 토스 페이
const coupon = document.getElementById("coupon-box");
const button = document.getElementById("payment-button");
const amount = 50000;

// 구매자의 고유 아이디를 불러와서 customerKey로 설정하세요.
// 이메일・전화번호와 같이 유추가 가능한 값은 안전하지 않습니다.
const widgetClientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "o6oZTVeixwIgyRubjs-F-";
const paymentWidget = PaymentWidget(widgetClientKey, customerKey); // 회원 결제
// const paymentWidget = PaymentWidget(widgetClientKey, PaymentWidget.ANONYMOUS) // 비회원 결제

const paymentMethodWidget = paymentWidget.renderPaymentMethods("#payment-method", { value: amount }, { variantKey: "DEFAULT" });

paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });

button.addEventListener("click", function () {
  // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
  // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
  paymentWidget.requestPayment({
    orderId: "w9Gv2zpCNrt_-aUg7xp6z",
    orderName: "토스 티셔츠 외 2건",
    successUrl: window.location.origin + "/success",
    failUrl: window.location.origin + "/fail",
    customerEmail: "customer123@gmail.com",
    customerName: "김토스",
    customerMobilePhone: "01012341234",
  });
});
