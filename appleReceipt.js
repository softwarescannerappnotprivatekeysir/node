let o = JSON.parse($response.body);
o.status = 0;
o.environment = "Production";
o.latest_receipt_info = [{
  "original_transaction_id": "420420420420420",
  "product_id": "netshort.yearly.vip",
  "expires_date_ms": Date.now() + 31536000000,
  "is_trial_period": "false"
}];
$done({body: JSON.stringify(o)});
