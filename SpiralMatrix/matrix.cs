namespace Matrix
{
    internal class CellState
    {
        public CellState(int maxX, int maxY)
        {
            CurrentState = State.Right;
            MaxX = maxX;
            MaxY = maxY;
            MinY = 0;
            MinX = 0;
        }
        public enum State
        {
            Left,
            Down,
            Right,
            Up
        }

        public int MaxX { get; set; }
        public int MaxY { get; set; }
        public int MinX { get; set; }
        public int MinY { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public State CurrentState { get; set; }

        public void MoveToNextState()
        {
            if (CurrentState == CellState.State.Right && X == MaxX - 1)
            {
                CurrentState = State.Down;
                MinY++;
            }
            else if (CurrentState == CellState.State.Down && Y == MaxY-1)
            {
                CurrentState = State.Left;
                MaxX--;
            }
            else if (CurrentState == CellState.State.Left && X == MinX)
            {
                CurrentState = State.Up;
                MaxY--;
            }
            else if (CurrentState == CellState.State.Up && Y == MinY)
            {
                CurrentState = State.Right;
                MinX++;
            }

            switch (CurrentState)
            {
                case State.Right:
                    X++;
                    break;
                case State.Left:
                    X--;
                    break;
                case State.Down:
                    Y++;
                    break;
                case State.Up:
                    Y--;
                    break;

            }
        }

    }

    class Program
    {


        private static int[,] Matrix(int n)
        {
            CellState c = new CellState(n,n);

            int[,] matrix = new int[n,n];
            int x = 1;
            do
            {
                matrix[c.Y, c.X] = x;
                c.MoveToNextState();
            } while ((++x) <= n * n);
            return matrix;
        }


        static void Main(string[] args)
        {
            Matrix(3);
        }
    }
}