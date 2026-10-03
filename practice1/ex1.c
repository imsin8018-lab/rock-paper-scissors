#include <stdio.h>

int main()
{
    int score[5] = {65, 92, 88, 74, 99};

    int max = score[0];

    for (int i = 1; i < 5; i++)
    {
        if (score[i] > max)
        {
            max = score[i];
        }
    }

    printf("최고 점수: %d\n", max);
    return 0;
}