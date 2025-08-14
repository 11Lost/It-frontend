export async function fetchImages() {
    try {   
        // Use IPv4 localhost to avoid IPv6 connection issues on Windows
        const res = await fetch('http://127.0.0.1:1337/api/home-page?populate=all');
        
        const data = await res.json();
        console.log("Strapi data:", data.data);
        
        return data.data;
        
    } catch (error) {
        console.error('Error fetching home page data:', error);
        return null;
    }
}

