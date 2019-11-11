/**
 * Copyright (C) 2019 Paytm.
 */
import * as Paytm from "paytm-pg-node-sdk";
import * as _SampleData from "./SampleData";

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
    public static createTxnTokenwithRequiredParams(): Promise<any> {
        console.log("createTxnTokenwithRequiredParams\n");
        try {
            /* ..... Merchants code here .... */
            /* 1. Merchants who only want to use PG for accepting payments */

            // Channel through which call initiated [enum (APP, WEB, WAP, SYSTEM)]
            var channelId: string = _SampleData.SampleData.getEChannelId();

            // Unique order for each order request
            var orderId: string = _SampleData.SampleData.getOrderId();

            // Transaction amount and the currency value
            var txnAmount: Paytm.Money = _SampleData.SampleData.getMoney();

            // cid : <Mandatory> user unique identification with respect to merchant
            var userInfo: Paytm.UserInfo = _SampleData.SampleData.getUserInfo();

            /*
            * paymentDetail object will have all the information required to make
            * initiate Transaction call
            */
            var paymentDetailBuilder: Paytm.PaymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
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
        } catch (e) {
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
    public static createTxnTokenwithPaytmSSotokenAndPaymentMode(): Promise<any> {
        console.log("\n\ncreateTxnTokenwithPaytmSSotokenAndPaymentMode\n");
        try {
            /*
             * 2. Merchants who want to use PG with Wallet and configure paymentmodes for
             * accepting payments with paytmSSOTokenS
             */

            // Channel through which call initiated [enum (APP, WEB, WAP, SYSTEM)]
            var channelId: string = _SampleData.SampleData.getEChannelId();

            // Unique order for each order request
            var orderId: string = _SampleData.SampleData.getOrderId();

            // Transaction amount and the currency value
            var txnAmount: Paytm.Money = _SampleData.SampleData.getMoney();

            // cid : <Mandatory> user unique identification with respect to merchant
            var userInfo: Paytm.UserInfo = _SampleData.SampleData.getUserInfo();

            // Paytm Token for a user
            var paytmSsoToken: string = _SampleData.SampleData.getPaytmSsoToken();

            // list of the payment modes which needs to enable. If the value provided then only listed payment modes are available for transaction
            var enablePaymentMode: Array<object> = _SampleData.SampleData.getEnablePaymentModes();

            // list of the payment modes which need to disable. If the value provided then all the listed payment modes are unavailable for transaction
            var disablePaymentMode: Array<object> = _SampleData.SampleData.getdisablePaymentModes();

            /*
             * paymentDetail object will have all the information required to make
             * initiate Transaction call
             */
            var paymentDetailBuilder: Paytm.PaymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
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
        } catch (e) {
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
    public static createTxnTokenwithAllParams(): Promise<any> {
        console.log("\n\ncreateTxnTokenwithAllParams\n");
        try {
            /*
             * 3. Merchants who want to use PG with Wallet, configure paymentmodes, send
             * Order details Subscription Information and Extended Information for accepting
             * payments
             */

            // Channel through which call initiated [enum (APP, WEB, WAP, SYSTEM)]
            var channelId: string = _SampleData.SampleData.getEChannelId();

            // Unique order for each order request
            var orderId: string = _SampleData.SampleData.getOrderId();

            // Transaction amount and the currency value
            var txnAmount: Paytm.Money = _SampleData.SampleData.getMoney();

            // cid : <Mandatory> user unique identification with respect to merchant
            var userInfo: Paytm.UserInfo = _SampleData.SampleData.getUserInfo();

            // Paytm Token for a user
            var paytmSsoToken: string = _SampleData.SampleData.getPaytmSsoToken();

            // list of the payment modes which needs to enable. If the value provided then only listed payment modes are available for transaction
            var enablePaymentMode: Array<object> = _SampleData.SampleData.getEnablePaymentModes();

            // list of the payment modes which need to disable. If the value provided then all the listed payment modes are unavailable for transaction
            var disablePaymentMode: Array<object> = _SampleData.SampleData.getdisablePaymentModes();

            // This contain the Goods info for an order.
            var goods: Array<object> = _SampleData.SampleData.getGoodsInfo();

            // This contain the shipping info for an order.
            var shippingInfo: Array<object> = _SampleData.SampleData.getShippingInfo();

            // promode that user is using for the payment
            var promoCode: string = _SampleData.SampleData.getPromocode();

            // This contain the set of parameters for some additional information
            var extendInfo: Paytm.ExtendInfo = _SampleData.SampleData.getExtendInfo();

            var emiOption: string = _SampleData.SampleData.getEmiOption();

            var cardTokenRequired: string = _SampleData.SampleData.getCardTokenRequired();

            /*
             * paymentDetail object will have all the information required to make
             * initiate Transaction call
             */
            var paymentDetailBuilder: Paytm.PaymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
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
        } catch (e) {
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
    public static getPaymentStatus(): Promise<any> {
        console.log("\n\ngetPaymentStatus\n");

        try {
            /** ..... Merchants code here .... */
            /** 5. Merchants who want to get TransactionStatus */

            /** Unique order for each order request */
            var orderId: string = "YOUR_ORDER_ID";
            var readTimeout: number = 80000;

            /**
             * Paytm\merchant\models\PaymentStatusDetail object will have all the information required to make
             * getPaymentStatus call
             */

            var paymentStatusDetailBuilder: Paytm.PaymentStatusDetailBuilder = new Paytm.PaymentStatusDetailBuilder(orderId);
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
        } catch (e) {
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
    public static initiateRefund(): Promise<any> {
        console.log("\n\ninitiateRefund\n");
        try {
            /** ..... Merchants code here .... */
            /** 5. Merchants who want to do refund */

            /** Unique order for each order request */
            var orderId: string = "YOUR_ORDER_ID";

            /** REF ID returned in Paytm\pg\process\Refund call */
            var refId: string = "UNIQUE_REFUND_ID";

            /** Transaction ID returned in Paytm\pg\process\Refund Api */
            var txnId: string = "PAYTM_TRANSACTION_ID";

            /** Transaction Type returned in Paytm\pg\process\Refund Api */
            var txnType: string = "REFUND";

            /** Paytm\pg\process\Refund Amount to be refunded (should not be greater than the Amount paid in the Transaction) */
            var refundAmount: string = "1";
            var readTimeout: number = 80000;

            /** Subwallet amount used in Paytm\pg\process\Refund Api */
            var subWalletAmount: object = _SampleData.SampleData.getSubWalletAmount();

            /** Extra params map used in Paytm\pg\process\Refund Api */
            var extraParamsMap: object = _SampleData.SampleData.getExtraParamsMap();

            /** Paytm\pg\process\Refund object will have all the information required to make refund call */
            var refund: Paytm.RefundDetailBuilder = new Paytm.RefundDetailBuilder(orderId, refId, txnId, txnType, refundAmount);
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
        } catch (e) {
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
    public static getRefundStatus(): Promise<any> {

        console.log("\n\ngetRefundStatus\n");
        try {
            /** ..... Merchants code here .... */
            /** 4. Merchants who want to get Paytm\pg\process\Refund Status */

            /** Unique order for each order request */
            var orderId: string = "YOUR_ORDER_ID";

            /** Unique ref id for each refund request */
            var refId: string = "YOUR_REFUND_ID";

            var readTimeout: number = 8000;

            /**
             * Paytm\merchant\models\RefundStatusDetail object will have all the information required to make
             * getRefundStatus call
             */
            var refundStatusDetailBuilder: Paytm.RefundStatusDetailBuilder = new Paytm.RefundStatusDetailBuilder(orderId, refId);
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
        } catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
            return Promise.reject(e);
        }
    }

    /**
     * @return void
     * @throws Exception
     */
    public static setInitialParameters(): void {
        try {
            var env: string = Paytm.LibraryConstants.STAGING_ENVIRONMENT;
            // Following mid and key is for create txn API
            var mid: string = "YOUR_MID_HERE";
            var key: string = "YOUR_KEY_HERE";
            var website: string = "YOUR_WEBSITE_NAME";

            /** Initialize mandatory Parameters */
            Paytm.MerchantProperties.initialize(env, mid, key, website);

            /** Setting timeout for connection i.e. Connection Timeout */
            Paytm.MerchantProperties.setConnectionTimeout(5000);
        } catch (e) {
            console.log("Exception caught: ", e);
            Paytm.LoggingUtil.addLog(Paytm.LoggingUtil.LogLevel.INFO, "DemoApp", "Exception caught: ", e);
        }
    }
}

// set merchant properties
DemoApp.setInitialParameters()

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