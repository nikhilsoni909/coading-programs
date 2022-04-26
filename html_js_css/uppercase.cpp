#include <bits/stdc++.h>

using namespace std;

int main()
{
    string a = "hello";
    int n = a.size();
    for (int i = 0; i < n; i++)
    {
        a[i] -= 32;
    }

    // transform(a.begin(), a.end(), a.begin(), ::toupper);
    cout << a;
    return 0;
}