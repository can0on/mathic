class Mathic {
    // greatest common divisor
    static gcd(a, b)
    {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // lowest common multiple
    static lcm(a, b)
    {
        return (a * b) / gcd(a, b);
    }
}