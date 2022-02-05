import os
import sys
from PyQt5 import QtCore, QtWidgets, QtWebEngineWidgets


class MainWindow(QtWidgets.QMainWindow):
    def __init__(self, parent=None):
        super().__init__(parent)
        view = QtWebEngineWidgets.QWebEngineView()
        file = os.path.join(
            os.path.dirname(os.path.realpath(__file__)),
            "index.html"
        )
        view.load(QtCore.QUrl.fromLocalFile(file))
        self.setWindowTitle("Tab Bar")
        self.setCentralWidget(view)
        self.resize(640, 480)


if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    w = MainWindow()
    w.show()
    sys.exit(app.exec_())
