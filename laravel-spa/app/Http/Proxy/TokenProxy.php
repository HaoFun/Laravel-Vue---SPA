<?php
namespace App\Http\Proxy;

class TokenProxy
{
    protected $http;

    public function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    public function login($username,$password)
    {
        //驗證 user email password 以及 is_active
        if(auth()->attempt(['email' => $username,'password' => $password,'is_active' => true]))
        {
            return $this->proxy('password',[
                'username' => $username,
                'password' => $password,
                'scope'    => ''
            ]);
        }
        //驗證錯誤 返回失敗訊息
        return response()->json([
            'status' => false,
            'message' => 'Credentials not match'
        ],421);
    }
    
    public function proxy($grantType,array $data = [])
    {
        $data = array_merge($data,[
            'client_id'     => env('PASSPORT_Client_ID'),
            'client_secret' => env('PASSPORT_Client_Secret'),
            'grant_type'    => $grantType
        ]);
        // oauth/token
        $response = $this->http->post(url('oauth/token'),[
            'form_params' => $data
        ]);
        $token = json_decode((string) $response->getBody(),true);
        return response()->json([
            'token'      => $token['access_token'],
            'expired_in' => $token['expires_in']
        ])->cookie('refreshToken',$token['refresh_token'],21600,null,null,false,true);  //60 min * 24 hour * 15 day = 21600 與AuthServiceProvider設定一致
    }
}