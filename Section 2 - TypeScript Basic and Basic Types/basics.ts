function add(a: number, b=5): number {
    return a + b;
}

add(10); // 15
// add('10');
add(10, 6);
// add(10, '6');