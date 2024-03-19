const refreshToken = process.env.REFRESH_TOKEN
const clientID = process.env.CLIENT_ID
const clientPrivate = process.env.PRIVATE_ID

const basic = Buffer.from(
    `${clientID}:${clientPrivate}`
  ).toString("base64");
  
  const getCredentials = async () => {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      next: {cache: "no-store",revalidate: 0},
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token:
         refreshToken,
      }),
    });
    
    return response.json();
  }

    export async function GET() {
    const { access_token } = await getCredentials();
    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    next: {cache:'no-store',revalidate: 0},
    headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    const data = await res.json();
    console.log(data)
    return Response.json(data)
    
  };
;
