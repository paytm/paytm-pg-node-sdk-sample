"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2019 Paytm.
 */
const Paytm = require("paytm-pg-node-sdk");
const _SampleData = require("./SampleData");
/**
 * This class has example of how to initialize and make api calls to hit paytm servers.
 * Here Initiate Transaction
 * Merchant will change this as per his requirements and make api calls
 */
/* class: DemoApp */
class DemoApp {
    /**
     * Merchant can change createTxnTokenwithRequiredParams according to his need.
     *
     * This method create a PaymentDetailCopy object having all the required
     * parameters and calls SDK's initiateTransaction method to get the
     * Paytm\pg\response\InitiateTransactionResponseBody object having token which will be used in
     * future transactions such as getting payment options
     *
     * @throws Exception
     */
    static createTxnTokenwithRequiredParams() {
        console.log("createTxnTokenwithRequiredParams\n");
        try {
            /* ..... Merchants code here .... */
            /* 1. Merchants who only want to use PG for accepting payments */
            // Channel through which call initiated [enum (APP, WEB, WAP, SYSTEM)]
            var channelId = _SampleData.SampleData.getEChannelId();
            // Unique order for each order request
            var orderId = _SampleData.SampleData.getOrderId();
            // Transaction amount and the currency value
            var txnAmount = _SampleData.SampleData.getMoney();
            // cid : <Mandatory> user unique identification with respect to merchant
            var userInfo = _SampleData.SampleData.getUserInfo();
            /*
            * paymentDetail object will have all the information required to make
            * initiate Transaction call
            */
            var paymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
            var paymentDetail = paymentDetailBuilder.build();
            /*
            * Making call to SDK method which will return a Paytm\pg\response\InitiateTransactionResponseBody
            * object that will contain a token which can be used for validation purpose for
            * future transactions
            */
            return Paytm.Payment.createTxnToken(paymentDetail).then(function (response) {
                if (response instanceof Paytm.SDKResponse) {
                    console.log("\nRaw Response:\n", response.getJsonResponse());
                }
                // DEBUGGING INFO
                console.log("\nRESPONSE RECEIVED IN DEMOAPP: ", response.getResponseObject());
                // DEBUGGING INFO ENDS
            });
        }
        catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
            return Promise.reject(e);
        }
    }
    /**
     * Merchant can change createTxnTokenwithPaytmSSotokenAndPaymentMode according
     * to his need.
     *
     * This method create a PaymentDetailCopy object with required parameters,
     * payment modes and PaytmSSOToken. This method calls SDK's initiateTransaction
     * method to get the Paytm\pg\response\InitiateTransactionResponseBody object having token which
     * will be used in future transactions such as getting payment options
     *
     * Merchant can only use payment modes for this transaction which he will
     * specify in this call if these payment modes are applicable on the merchant
     *
     * @throws Exception
     */
    static createTxnTokenwithPaytmSSotokenAndPaymentMode() {
        console.log("\n\ncreateTxnTokenwithPaytmSSotokenAndPaymentMode\n");
        try {
            /*
             * 2. Merchants who want to use PG with Wallet and configure paymentmodes for
             * accepting payments with paytmSSOTokenS
             */
            // Channel through which call initiated [enum (APP, WEB, WAP, SYSTEM)]
            var channelId = _SampleData.SampleData.getEChannelId();
            // Unique order for each order request
            var orderId = _SampleData.SampleData.getOrderId();
            // Transaction amount and the currency value
            var txnAmount = _SampleData.SampleData.getMoney();
            // cid : <Mandatory> user unique identification with respect to merchant
            var userInfo = _SampleData.SampleData.getUserInfo();
            // Paytm Token for a user
            var paytmSsoToken = _SampleData.SampleData.getPaytmSsoToken();
            // list of the payment modes which needs to enable. If the value provided then only listed payment modes are available for transaction
            var enablePaymentMode = _SampleData.SampleData.getEnablePaymentModes();
            // list of the payment modes which need to disable. If the value provided then all the listed payment modes are unavailable for transaction
            var disablePaymentMode = _SampleData.SampleData.getdisablePaymentModes();
            /*
             * paymentDetail object will have all the information required to make
             * initiate Transaction call
             */
            var paymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
            var paymentDetail = paymentDetailBuilder
                .setPaytmSsoToken(paytmSsoToken)
                .setEnablePaymentMode(enablePaymentMode)
                .setDisablePaymentMode(disablePaymentMode)
                .build();
            /*
             * Making call to SDK method which will return a Paytm\pg\response\InitiateTransactionResponseBody
             * object that will contain a token which can be used for validation purpose for
             * future transactions
             */
            return Paytm.Payment.createTxnToken(paymentDetail).then(function (response) {
                if (response instanceof Paytm.SDKResponse) {
                    console.log("\nRaw Response:\n", response.getJsonResponse());
                }
                // DEBUGGING INFO
                console.log("\nRESPONSE RECEIVED IN DEMOAPP: ", response.getResponseObject());
                // DEBUGGING INFO ENDS
            });
        }
        catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
            return Promise.reject(e);
        }
    }
    /**
     * Merchant can change createTxnTokenwithAllParams according to his need.
     *
     * This method create a PaymentDetailCopy object having all the parameters and
     * calls SDK's initiateTransaction method to get the
     * Paytm\pg\response\InitiateTransactionResponseBody object having token which will be used in
     * future transactions such as getting payment options
     *
     * @throws Exception
     */
    static createTxnTokenwithAllParams() {
        console.log("\n\ncreateTxnTokenwithAllParams\n");
        try {
            /*
             * 3. Merchants who want to use PG with Wallet, configure paymentmodes, send
             * Order details Subscription Information and Extended Information for accepting
             * payments
             */
            // Channel through which call initiated [enum (APP, WEB, WAP, SYSTEM)]
            var channelId = _SampleData.SampleData.getEChannelId();
            // Unique order for each order request
            var orderId = _SampleData.SampleData.getOrderId();
            // Transaction amount and the currency value
            var txnAmount = _SampleData.SampleData.getMoney();
            // cid : <Mandatory> user unique identification with respect to merchant
            var userInfo = _SampleData.SampleData.getUserInfo();
            // Paytm Token for a user
            var paytmSsoToken = _SampleData.SampleData.getPaytmSsoToken();
            // list of the payment modes which needs to enable. If the value provided then only listed payment modes are available for transaction
            var enablePaymentMode = _SampleData.SampleData.getEnablePaymentModes();
            // list of the payment modes which need to disable. If the value provided then all the listed payment modes are unavailable for transaction
            var disablePaymentMode = _SampleData.SampleData.getdisablePaymentModes();
            // This contain the Goods info for an order.
            var goods = _SampleData.SampleData.getGoodsInfo();
            // This contain the shipping info for an order.
            var shippingInfo = _SampleData.SampleData.getShippingInfo();
            // promode that user is using for the payment
            var promoCode = _SampleData.SampleData.getPromocode();
            // This contain the set of parameters for some additional information
            var extendInfo = _SampleData.SampleData.getExtendInfo();
            var emiOption = _SampleData.SampleData.getEmiOption();
            var cardTokenRequired = _SampleData.SampleData.getCardTokenRequired();
            /*
             * paymentDetail object will have all the information required to make
             * initiate Transaction call
             */
            var paymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
            var paymentDetail = paymentDetailBuilder
                .setPaytmSsoToken(paytmSsoToken)
                .setEnablePaymentMode(enablePaymentMode)
                .setDisablePaymentMode(disablePaymentMode)
                .setGoods(goods)
                .setShippingInfo(shippingInfo)
                .setPromoCode(promoCode)
                .setExtendInfo(extendInfo)
                .setEmiOption(emiOption)
                .setCardTokenRequired(cardTokenRequired)
                .build();
            /*
             * Making call to SDK method which will return a Paytm\pg\response\InitiateTransactionResponseBody
             * object that will contain a token which can be used for validation purpose for
             * future transactions
             */
            return Paytm.Payment.createTxnToken(paymentDetail).then(function (response) {
                if (response instanceof Paytm.SDKResponse) {
                    console.log("\nRaw Response:\n", response.getJsonResponse());
                }
                // DEBUGGING INFO
                console.log("\nRESPONSE RECEIVED IN DEMOAPP: ", response.getResponseObject());
                // DEBUGGING INFO ENDS
            });
        }
        catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
            return Promise.reject(e);
        }
    }
    /**
     * Merchant will use getPaymentStatus after complete Paytm\pg\process\Payment. This method
     * (Mandatory Parameters)require OrderId ID. This will return the status for the
     * specific OrderId ID.
     *
     * @throws Exception
     */
    static getPaymentStatus() {
        console.log("\n\ngetPaymentStatus\n");
        try {
            /** ..... Merchants code here .... */
            /** 5. Merchants who want to get TransactionStatus */
            /** Unique order for each order request */
            var orderId = "YOUR_ORDER_ID";
            var readTimeout = 80000;
            /**
             * Paytm\merchant\models\PaymentStatusDetail object will have all the information required to make
             * getPaymentStatus call
             */
            var paymentStatusDetailBuilder = new Paytm.PaymentStatusDetailBuilder(orderId);
            var paymentStatusDetail = paymentStatusDetailBuilder.
                setReadTimeout(readTimeout)
                .build();
            /**
             * Making call to SDK method which will return a
             * NativeMerchantStatusResponseBody object that will contain the Transaction
             * Status Paytm\pg\response\interfaces\Response regarding the Order Id
             */
            return Paytm.Payment.getPaymentStatus(paymentStatusDetail).then(function (response) {
                if (response instanceof Paytm.SDKResponse) {
                    console.log("\nRaw Response:\n", response.getJsonResponse());
                }
                // DEBUGGING INFO
                console.log("\nRESPONSE RECEIVED IN DEMOAPP: ", response.getResponseObject());
                // DEBUGGING INFO ENDS
            });
        }
        catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
            return Promise.reject(e);
        }
    }
    /**
     * Merchant will use doRefund after complete Paytm\pg\process\Payment. This method (Mandatory
     * Parameters)require Transaction ID, Transaction Type and Paytm\pg\process\Refund Amount. This
     * will initiate the refund for the specific Transaction ID.
     *
     * @throws Exception
     */
    static initiateRefund() {
        console.log("\n\ninitiateRefund\n");
        try {
            /** ..... Merchants code here .... */
            /** 5. Merchants who want to do refund */
            /** Unique order for each order request */
            var orderId = "YOUR_ORDER_ID";
            /** REF ID returned in Paytm\pg\process\Refund call */
            var refId = "UNIQUE_REFUND_ID";
            /** Transaction ID returned in Paytm\pg\process\Refund Api */
            var txnId = "PAYTM_TRANSACTION_ID";
            /** Transaction Type returned in Paytm\pg\process\Refund Api */
            var txnType = "REFUND";
            /** Paytm\pg\process\Refund Amount to be refunded (should not be greater than the Amount paid in the Transaction) */
            var refundAmount = "1";
            var readTimeout = 80000;
            /** Subwallet amount used in Paytm\pg\process\Refund Api */
            var subWalletAmount = _SampleData.SampleData.getSubWalletAmount();
            /** Extra params map used in Paytm\pg\process\Refund Api */
            var extraParamsMap = _SampleData.SampleData.getExtraParamsMap();
            /** Paytm\pg\process\Refund object will have all the information required to make refund call */
            var refund = new Paytm.RefundDetailBuilder(orderId, refId, txnId, txnType, refundAmount);
            var refundDetail = refund
                .setReadTimeout(readTimeout)
                .setSubwalletAmount(subWalletAmount)
                .setExtraParamsMap(extraParamsMap)
                .build();
            /**
             * Making call to SDK method which will return a Paytm\pg\response\AsyncRefundResponseBody object
             * that will contain the Paytm\pg\process\Refund Paytm\pg\response\interfaces\Response regarding the Transaction Id
             */
            return Paytm.Refund.initiateRefund(refundDetail).then(function (response) {
                if (response instanceof Paytm.SDKResponse) {
                    console.log("\nRaw Response:\n", response.getJsonResponse());
                }
                // DEBUGGING INFO
                console.log("\nRESPONSE RECEIVED IN DEMOAPP: ", response.getResponseObject());
                // DEBUGGING INFO ENDS
            });
        }
        catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
            return Promise.reject(e);
        }
    }
    /**
     * Merchant can use getRefundStatus method to get the Status of any previous
     * Paytm\pg\process\Refund transaction.
     *
     * Merchant will use getRefundStatus after Paytm\pg\process\Payment. This method (Mandatory
     * Parameters)require OrderId ID and refId. This will return the
     * Paytm\merchant\models\SDKResponse object having status for the
     * specific Paytm\pg\process\Refund.
     *
     * @throws Exception
     */
    static getRefundStatus() {
        console.log("\n\ngetRefundStatus\n");
        try {
            /** ..... Merchants code here .... */
            /** 4. Merchants who want to get Paytm\pg\process\Refund Status */
            /** Unique order for each order request */
            var orderId = "YOUR_ORDER_ID";
            /** Unique ref id for each refund request */
            var refId = "YOUR_REFUND_ID";
            var readTimeout = 8000;
            /**
             * Paytm\merchant\models\RefundStatusDetail object will have all the information required to make
             * getRefundStatus call
             */
            var refundStatusDetailBuilder = new Paytm.RefundStatusDetailBuilder(orderId, refId);
            var refundStatusDetail = refundStatusDetailBuilder
                .setReadTimeout(readTimeout)
                .build();
            // Following 2 lines are only for testing purpose
            Paytm.MerchantProperties.setMid("YOUR_MID_HERE");
            Paytm.MerchantProperties.setMerchantKey("YOUR_KEY_HERE");
            /**
             * Making call to SDK method which will return the
             * Paytm\merchant\models\SDKResponse(Paytm\pg\request\NativeRefundStatusRequest) that holds Paytm\pg\process\Refund Status of any
             * previous Paytm\pg\process\Refund.
             */
            return Paytm.Refund.getRefundStatus(refundStatusDetail).then(function (response) {
                if (response instanceof Paytm.SDKResponse) {
                    console.log("\nRaw Response:\n", response.getJsonResponse());
                }
                // DEBUGGING INFO
                console.log("\nRESPONSE RECEIVED IN DEMOAPP: ", response.getResponseObject());
                // DEBUGGING INFO ENDS
            });
        }
        catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
            return Promise.reject(e);
        }
    }
    /**
     * @return void
     * @throws Exception
     */
    static setInitialParameters() {
        try {
            var env = Paytm.LibraryConstants.STAGING_ENVIRONMENT;
            // Following mid and key is for create txn API
            var mid = "YOUR_MID_HERE";
            var key = "YOUR_KEY_HERE";
            var website = "YOUR_WEBSITE_NAME";

            /** Initialize mandatory Parameters */
            Paytm.MerchantProperties.initialize(env, mid, key, website);
            /** Setting timeout for connection i.e. Connection Timeout */
            Paytm.MerchantProperties.setConnectionTimeout(5000);
        }
        catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
        }
    }
}
// set merchant properties
DemoApp.setInitialParameters();
// Example using only mandatory fields
DemoApp.createTxnTokenwithRequiredParams()
    // Example using mandatory and enabling and disabling payment modes fields
    .then(() => DemoApp.createTxnTokenwithPaytmSSotokenAndPaymentMode())
    // Example using all fields
    .then(() => DemoApp.createTxnTokenwithAllParams())
    // Example of get payment status
    .then(() => DemoApp.getPaymentStatus())
    // Example of refund
    .then(() => DemoApp.initiateRefund())
    // Example of get refund status
    .then(() => DemoApp.getRefundStatus());
