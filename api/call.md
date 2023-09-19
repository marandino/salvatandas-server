# /call endpoint

## Description

This API endpoint allows you to trigger a call to a specified phone number using Twilio's programmable voice and calling capabilities.

## Request

The request should be a POST request with the following JSON body:

```json
{
  "phone": "<Phone number>"
}
```

Where `<Phone number>` is the phone number to which the call will be made.

## Response

Upon success, the API returns a `200 OK` status, and a JSON object containing a successful message.

```json
{
  "message": "Call requested"
}
```

If the `phone` property is not present in the request body, the API returns a `400 Bad Request` status and a JSON object indicating that the phone number is missing.

```json
{
  "message": "Phone number is missing"
}
```

## Error Handling

If there are any issues with triggering the call via Twilio, the API will log the error and return a `500 Internal Server Error` status, with a JSON object providing information about the failure.

```json
{
  "message": "Request failed"
}
```
